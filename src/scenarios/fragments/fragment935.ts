import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken933 } from "./fragment933";
import type { FragmentToken934 } from "./fragment934";

export const FRAGMENT_935 = gql(`
  fragment Fragment935 on Member94 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_94
    memberCount_94
    memberMetric_94
  }
`);

type FragmentResult935 = ResultOf<typeof FRAGMENT_935>;
type FragmentSelf935 = NonNullable<FragmentResult935>;

export type FragmentToken935 =
  | FragmentSelf935["__typename"]
  | FragmentSelf935["typenameHint"] | FragmentToken933 | FragmentToken934;
