import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2577 } from "./fragment2577";
import type { FragmentToken2578 } from "./fragment2578";

export const FRAGMENT_2579 = gql(`
  fragment Fragment2579 on Member58 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_58
    memberCount_58
    memberMetric_58
  }
`);

type FragmentResult2579 = ResultOf<typeof FRAGMENT_2579>;
type FragmentSelf2579 = NonNullable<FragmentResult2579>;

export type FragmentToken2579 =
  | FragmentSelf2579["__typename"]
  | FragmentSelf2579["typenameHint"] | FragmentToken2577 | FragmentToken2578;
