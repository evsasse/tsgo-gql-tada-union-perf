import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken180 } from "./fragment180";
import type { FragmentToken181 } from "./fragment181";

export const FRAGMENT_182 = gql(`
  fragment Fragment182 on Member181 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_181
    memberCount_181
    memberMetric_181
  }
`);

type FragmentResult182 = ResultOf<typeof FRAGMENT_182>;
type FragmentSelf182 = NonNullable<FragmentResult182>;

export type FragmentToken182 =
  | FragmentSelf182["__typename"]
  | FragmentSelf182["typenameHint"] | FragmentToken180 | FragmentToken181;
