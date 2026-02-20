import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken197 } from "./fragment197";
import type { FragmentToken198 } from "./fragment198";

export const FRAGMENT_199 = gql(`
  fragment Fragment199 on Member198 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_198
    memberCount_198
    memberMetric_198
  }
`);

type FragmentResult199 = ResultOf<typeof FRAGMENT_199>;
type FragmentSelf199 = NonNullable<FragmentResult199>;

export type FragmentToken199 =
  | FragmentSelf199["__typename"]
  | FragmentSelf199["typenameHint"] | FragmentToken197 | FragmentToken198;
