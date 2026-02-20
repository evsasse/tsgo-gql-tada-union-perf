import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3240 } from "./fragment3240";
import type { FragmentToken3241 } from "./fragment3241";

export const FRAGMENT_3242 = gql(`
  fragment Fragment3242 on Member161 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_161
    memberCount_161
    memberMetric_161
  }
`);

type FragmentResult3242 = ResultOf<typeof FRAGMENT_3242>;
type FragmentSelf3242 = NonNullable<FragmentResult3242>;

export type FragmentToken3242 =
  | FragmentSelf3242["__typename"]
  | FragmentSelf3242["typenameHint"] | FragmentToken3240 | FragmentToken3241;
