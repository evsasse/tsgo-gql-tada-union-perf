import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3387 } from "./fragment3387";
import type { FragmentToken3388 } from "./fragment3388";

export const FRAGMENT_3389 = gql(`
  fragment Fragment3389 on Member28 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_28
    memberCount_28
    memberMetric_28
  }
`);

type FragmentResult3389 = ResultOf<typeof FRAGMENT_3389>;
type FragmentSelf3389 = NonNullable<FragmentResult3389>;

export type FragmentToken3389 =
  | FragmentSelf3389["__typename"]
  | FragmentSelf3389["typenameHint"] | FragmentToken3387 | FragmentToken3388;
