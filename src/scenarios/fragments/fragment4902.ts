import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4900 } from "./fragment4900";
import type { FragmentToken4901 } from "./fragment4901";

export const FRAGMENT_4902 = gql(`
  fragment Fragment4902 on Member141 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_141
    memberCount_141
    memberMetric_141
  }
`);

type FragmentResult4902 = ResultOf<typeof FRAGMENT_4902>;
type FragmentSelf4902 = NonNullable<FragmentResult4902>;

export type FragmentToken4902 =
  | FragmentSelf4902["__typename"]
  | FragmentSelf4902["typenameHint"] | FragmentToken4900 | FragmentToken4901;
