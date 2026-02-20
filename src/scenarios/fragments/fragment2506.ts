import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2504 } from "./fragment2504";
import type { FragmentToken2505 } from "./fragment2505";

export const FRAGMENT_2506 = gql(`
  fragment Fragment2506 on Member265 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_265
    memberCount_265
    memberMetric_265
  }
`);

type FragmentResult2506 = ResultOf<typeof FRAGMENT_2506>;
type FragmentSelf2506 = NonNullable<FragmentResult2506>;

export type FragmentToken2506 =
  | FragmentSelf2506["__typename"]
  | FragmentSelf2506["typenameHint"] | FragmentToken2504 | FragmentToken2505;
