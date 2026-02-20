import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken807 } from "./fragment807";
import type { FragmentToken808 } from "./fragment808";

export const FRAGMENT_809 = gql(`
  fragment Fragment809 on Member248 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_248
    memberCount_248
    memberMetric_248
  }
`);

type FragmentResult809 = ResultOf<typeof FRAGMENT_809>;
type FragmentSelf809 = NonNullable<FragmentResult809>;

export type FragmentToken809 =
  | FragmentSelf809["__typename"]
  | FragmentSelf809["typenameHint"] | FragmentToken807 | FragmentToken808;
