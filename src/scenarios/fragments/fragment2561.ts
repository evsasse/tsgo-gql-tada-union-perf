import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2559 } from "./fragment2559";
import type { FragmentToken2560 } from "./fragment2560";

export const FRAGMENT_2561 = gql(`
  fragment Fragment2561 on Member40 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_40
    memberCount_40
    memberMetric_40
  }
`);

type FragmentResult2561 = ResultOf<typeof FRAGMENT_2561>;
type FragmentSelf2561 = NonNullable<FragmentResult2561>;

export type FragmentToken2561 =
  | FragmentSelf2561["__typename"]
  | FragmentSelf2561["typenameHint"] | FragmentToken2559 | FragmentToken2560;
