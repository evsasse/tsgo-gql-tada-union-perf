import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4912 } from "./fragment4912";
import type { FragmentToken4913 } from "./fragment4913";

export const FRAGMENT_4914 = gql(`
  fragment Fragment4914 on Member153 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_153
    memberCount_153
    memberMetric_153
  }
`);

type FragmentResult4914 = ResultOf<typeof FRAGMENT_4914>;
type FragmentSelf4914 = NonNullable<FragmentResult4914>;

export type FragmentToken4914 =
  | FragmentSelf4914["__typename"]
  | FragmentSelf4914["typenameHint"] | FragmentToken4912 | FragmentToken4913;
