import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2586 } from "./fragment2586";
import type { FragmentToken2587 } from "./fragment2587";

export const FRAGMENT_2588 = gql(`
  fragment Fragment2588 on Member67 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_67
    memberCount_67
    memberMetric_67
  }
`);

type FragmentResult2588 = ResultOf<typeof FRAGMENT_2588>;
type FragmentSelf2588 = NonNullable<FragmentResult2588>;

export type FragmentToken2588 =
  | FragmentSelf2588["__typename"]
  | FragmentSelf2588["typenameHint"] | FragmentToken2586 | FragmentToken2587;
