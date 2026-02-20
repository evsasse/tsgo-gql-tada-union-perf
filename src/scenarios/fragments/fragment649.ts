import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken647 } from "./fragment647";
import type { FragmentToken648 } from "./fragment648";

export const FRAGMENT_649 = gql(`
  fragment Fragment649 on Member88 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_88
    memberCount_88
    memberMetric_88
  }
`);

type FragmentResult649 = ResultOf<typeof FRAGMENT_649>;
type FragmentSelf649 = NonNullable<FragmentResult649>;

export type FragmentToken649 =
  | FragmentSelf649["__typename"]
  | FragmentSelf649["typenameHint"] | FragmentToken647 | FragmentToken648;
