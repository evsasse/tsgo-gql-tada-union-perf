import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3627 } from "./fragment3627";
import type { FragmentToken3628 } from "./fragment3628";

export const FRAGMENT_3629 = gql(`
  fragment Fragment3629 on Member268 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_268
    memberCount_268
    memberMetric_268
  }
`);

type FragmentResult3629 = ResultOf<typeof FRAGMENT_3629>;
type FragmentSelf3629 = NonNullable<FragmentResult3629>;

export type FragmentToken3629 =
  | FragmentSelf3629["__typename"]
  | FragmentSelf3629["typenameHint"] | FragmentToken3627 | FragmentToken3628;
