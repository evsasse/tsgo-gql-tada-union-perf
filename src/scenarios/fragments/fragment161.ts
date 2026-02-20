import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken159 } from "./fragment159";
import type { FragmentToken160 } from "./fragment160";

export const FRAGMENT_161 = gql(`
  fragment Fragment161 on Member160 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_160
    memberCount_160
    memberMetric_160
  }
`);

type FragmentResult161 = ResultOf<typeof FRAGMENT_161>;
type FragmentSelf161 = NonNullable<FragmentResult161>;

export type FragmentToken161 =
  | FragmentSelf161["__typename"]
  | FragmentSelf161["typenameHint"] | FragmentToken159 | FragmentToken160;
