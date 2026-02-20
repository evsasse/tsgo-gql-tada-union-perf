import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4860 } from "./fragment4860";
import type { FragmentToken4861 } from "./fragment4861";

export const FRAGMENT_4862 = gql(`
  fragment Fragment4862 on Member101 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_101
    memberCount_101
    memberMetric_101
  }
`);

type FragmentResult4862 = ResultOf<typeof FRAGMENT_4862>;
type FragmentSelf4862 = NonNullable<FragmentResult4862>;

export type FragmentToken4862 =
  | FragmentSelf4862["__typename"]
  | FragmentSelf4862["typenameHint"] | FragmentToken4860 | FragmentToken4861;
