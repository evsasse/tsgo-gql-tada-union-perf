import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken198 } from "./fragment198";
import type { FragmentToken199 } from "./fragment199";

export const FRAGMENT_200 = gql(`
  fragment Fragment200 on Member199 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_199
    memberCount_199
    memberMetric_199
  }
`);

type FragmentResult200 = ResultOf<typeof FRAGMENT_200>;
type FragmentSelf200 = NonNullable<FragmentResult200>;

export type FragmentToken200 =
  | FragmentSelf200["__typename"]
  | FragmentSelf200["typenameHint"] | FragmentToken198 | FragmentToken199;
