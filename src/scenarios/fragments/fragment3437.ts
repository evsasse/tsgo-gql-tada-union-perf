import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3435 } from "./fragment3435";
import type { FragmentToken3436 } from "./fragment3436";

export const FRAGMENT_3437 = gql(`
  fragment Fragment3437 on Member76 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_76
    memberCount_76
    memberMetric_76
  }
`);

type FragmentResult3437 = ResultOf<typeof FRAGMENT_3437>;
type FragmentSelf3437 = NonNullable<FragmentResult3437>;

export type FragmentToken3437 =
  | FragmentSelf3437["__typename"]
  | FragmentSelf3437["typenameHint"] | FragmentToken3435 | FragmentToken3436;
