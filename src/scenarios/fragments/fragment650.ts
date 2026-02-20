import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken648 } from "./fragment648";
import type { FragmentToken649 } from "./fragment649";

export const FRAGMENT_650 = gql(`
  fragment Fragment650 on Member89 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_89
    memberCount_89
    memberMetric_89
  }
`);

type FragmentResult650 = ResultOf<typeof FRAGMENT_650>;
type FragmentSelf650 = NonNullable<FragmentResult650>;

export type FragmentToken650 =
  | FragmentSelf650["__typename"]
  | FragmentSelf650["typenameHint"] | FragmentToken648 | FragmentToken649;
