import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4089 } from "./fragment4089";
import type { FragmentToken4090 } from "./fragment4090";

export const FRAGMENT_4091 = gql(`
  fragment Fragment4091 on Member170 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_170
    memberCount_170
    memberMetric_170
  }
`);

type FragmentResult4091 = ResultOf<typeof FRAGMENT_4091>;
type FragmentSelf4091 = NonNullable<FragmentResult4091>;

export type FragmentToken4091 =
  | FragmentSelf4091["__typename"]
  | FragmentSelf4091["typenameHint"] | FragmentToken4089 | FragmentToken4090;
