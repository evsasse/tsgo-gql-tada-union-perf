import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4861 } from "./fragment4861";
import type { FragmentToken4862 } from "./fragment4862";

export const FRAGMENT_4863 = gql(`
  fragment Fragment4863 on Member102 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_102
    memberCount_102
    memberMetric_102
  }
`);

type FragmentResult4863 = ResultOf<typeof FRAGMENT_4863>;
type FragmentSelf4863 = NonNullable<FragmentResult4863>;

export type FragmentToken4863 =
  | FragmentSelf4863["__typename"]
  | FragmentSelf4863["typenameHint"] | FragmentToken4861 | FragmentToken4862;
