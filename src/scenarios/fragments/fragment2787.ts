import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2785 } from "./fragment2785";
import type { FragmentToken2786 } from "./fragment2786";

export const FRAGMENT_2787 = gql(`
  fragment Fragment2787 on Member266 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_266
    memberCount_266
    memberMetric_266
  }
`);

type FragmentResult2787 = ResultOf<typeof FRAGMENT_2787>;
type FragmentSelf2787 = NonNullable<FragmentResult2787>;

export type FragmentToken2787 =
  | FragmentSelf2787["__typename"]
  | FragmentSelf2787["typenameHint"] | FragmentToken2785 | FragmentToken2786;
