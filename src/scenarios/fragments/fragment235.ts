import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken233 } from "./fragment233";
import type { FragmentToken234 } from "./fragment234";

export const FRAGMENT_235 = gql(`
  fragment Fragment235 on Member234 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_234
    memberCount_234
    memberMetric_234
  }
`);

type FragmentResult235 = ResultOf<typeof FRAGMENT_235>;
type FragmentSelf235 = NonNullable<FragmentResult235>;

export type FragmentToken235 =
  | FragmentSelf235["__typename"]
  | FragmentSelf235["typenameHint"] | FragmentToken233 | FragmentToken234;
