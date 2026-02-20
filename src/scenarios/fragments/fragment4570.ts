import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4568 } from "./fragment4568";
import type { FragmentToken4569 } from "./fragment4569";

export const FRAGMENT_4570 = gql(`
  fragment Fragment4570 on Member89 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_89
    memberCount_89
    memberMetric_89
  }
`);

type FragmentResult4570 = ResultOf<typeof FRAGMENT_4570>;
type FragmentSelf4570 = NonNullable<FragmentResult4570>;

export type FragmentToken4570 =
  | FragmentSelf4570["__typename"]
  | FragmentSelf4570["typenameHint"] | FragmentToken4568 | FragmentToken4569;
