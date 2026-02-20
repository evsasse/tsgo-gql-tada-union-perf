import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4299 } from "./fragment4299";
import type { FragmentToken4300 } from "./fragment4300";

export const FRAGMENT_4301 = gql(`
  fragment Fragment4301 on Member100 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_100
    memberCount_100
    memberMetric_100
  }
`);

type FragmentResult4301 = ResultOf<typeof FRAGMENT_4301>;
type FragmentSelf4301 = NonNullable<FragmentResult4301>;

export type FragmentToken4301 =
  | FragmentSelf4301["__typename"]
  | FragmentSelf4301["typenameHint"] | FragmentToken4299 | FragmentToken4300;
