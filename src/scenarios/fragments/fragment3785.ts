import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3783 } from "./fragment3783";
import type { FragmentToken3784 } from "./fragment3784";

export const FRAGMENT_3785 = gql(`
  fragment Fragment3785 on Member144 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_144
    memberCount_144
    memberMetric_144
  }
`);

type FragmentResult3785 = ResultOf<typeof FRAGMENT_3785>;
type FragmentSelf3785 = NonNullable<FragmentResult3785>;

export type FragmentToken3785 =
  | FragmentSelf3785["__typename"]
  | FragmentSelf3785["typenameHint"] | FragmentToken3783 | FragmentToken3784;
