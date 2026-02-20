import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken551 } from "./fragment551";
import type { FragmentToken552 } from "./fragment552";

export const FRAGMENT_553 = gql(`
  fragment Fragment553 on Member272 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_272
    memberCount_272
    memberMetric_272
  }
`);

type FragmentResult553 = ResultOf<typeof FRAGMENT_553>;
type FragmentSelf553 = NonNullable<FragmentResult553>;

export type FragmentToken553 =
  | FragmentSelf553["__typename"]
  | FragmentSelf553["typenameHint"] | FragmentToken551 | FragmentToken552;
