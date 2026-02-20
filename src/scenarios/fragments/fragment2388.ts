import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2386 } from "./fragment2386";
import type { FragmentToken2387 } from "./fragment2387";

export const FRAGMENT_2388 = gql(`
  fragment Fragment2388 on Member147 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_147
    memberCount_147
    memberMetric_147
  }
`);

type FragmentResult2388 = ResultOf<typeof FRAGMENT_2388>;
type FragmentSelf2388 = NonNullable<FragmentResult2388>;

export type FragmentToken2388 =
  | FragmentSelf2388["__typename"]
  | FragmentSelf2388["typenameHint"] | FragmentToken2386 | FragmentToken2387;
