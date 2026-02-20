import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4550 } from "./fragment4550";
import type { FragmentToken4551 } from "./fragment4551";

export const FRAGMENT_4552 = gql(`
  fragment Fragment4552 on Member71 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_71
    memberCount_71
    memberMetric_71
  }
`);

type FragmentResult4552 = ResultOf<typeof FRAGMENT_4552>;
type FragmentSelf4552 = NonNullable<FragmentResult4552>;

export type FragmentToken4552 =
  | FragmentSelf4552["__typename"]
  | FragmentSelf4552["typenameHint"] | FragmentToken4550 | FragmentToken4551;
