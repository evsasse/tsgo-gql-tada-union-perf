import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2769 } from "./fragment2769";
import type { FragmentToken2770 } from "./fragment2770";

export const FRAGMENT_2771 = gql(`
  fragment Fragment2771 on Member250 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_250
    memberCount_250
    memberMetric_250
  }
`);

type FragmentResult2771 = ResultOf<typeof FRAGMENT_2771>;
type FragmentSelf2771 = NonNullable<FragmentResult2771>;

export type FragmentToken2771 =
  | FragmentSelf2771["__typename"]
  | FragmentSelf2771["typenameHint"] | FragmentToken2769 | FragmentToken2770;
