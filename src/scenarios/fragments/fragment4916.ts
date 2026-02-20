import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4914 } from "./fragment4914";
import type { FragmentToken4915 } from "./fragment4915";

export const FRAGMENT_4916 = gql(`
  fragment Fragment4916 on Member155 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_155
    memberCount_155
    memberMetric_155
  }
`);

type FragmentResult4916 = ResultOf<typeof FRAGMENT_4916>;
type FragmentSelf4916 = NonNullable<FragmentResult4916>;

export type FragmentToken4916 =
  | FragmentSelf4916["__typename"]
  | FragmentSelf4916["typenameHint"] | FragmentToken4914 | FragmentToken4915;
