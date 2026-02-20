import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken634 } from "./fragment634";
import type { FragmentToken635 } from "./fragment635";

export const FRAGMENT_636 = gql(`
  fragment Fragment636 on Member75 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_75
    memberCount_75
    memberMetric_75
  }
`);

type FragmentResult636 = ResultOf<typeof FRAGMENT_636>;
type FragmentSelf636 = NonNullable<FragmentResult636>;

export type FragmentToken636 =
  | FragmentSelf636["__typename"]
  | FragmentSelf636["typenameHint"] | FragmentToken634 | FragmentToken635;
