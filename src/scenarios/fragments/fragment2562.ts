import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2560 } from "./fragment2560";
import type { FragmentToken2561 } from "./fragment2561";

export const FRAGMENT_2562 = gql(`
  fragment Fragment2562 on Member41 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_41
    memberCount_41
    memberMetric_41
  }
`);

type FragmentResult2562 = ResultOf<typeof FRAGMENT_2562>;
type FragmentSelf2562 = NonNullable<FragmentResult2562>;

export type FragmentToken2562 =
  | FragmentSelf2562["__typename"]
  | FragmentSelf2562["typenameHint"] | FragmentToken2560 | FragmentToken2561;
