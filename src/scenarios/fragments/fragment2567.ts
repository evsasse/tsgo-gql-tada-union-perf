import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2565 } from "./fragment2565";
import type { FragmentToken2566 } from "./fragment2566";

export const FRAGMENT_2567 = gql(`
  fragment Fragment2567 on Member46 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_46
    memberCount_46
    memberMetric_46
  }
`);

type FragmentResult2567 = ResultOf<typeof FRAGMENT_2567>;
type FragmentSelf2567 = NonNullable<FragmentResult2567>;

export type FragmentToken2567 =
  | FragmentSelf2567["__typename"]
  | FragmentSelf2567["typenameHint"] | FragmentToken2565 | FragmentToken2566;
