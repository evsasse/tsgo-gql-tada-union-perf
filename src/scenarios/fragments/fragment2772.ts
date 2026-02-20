import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2770 } from "./fragment2770";
import type { FragmentToken2771 } from "./fragment2771";

export const FRAGMENT_2772 = gql(`
  fragment Fragment2772 on Member251 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_251
    memberCount_251
    memberMetric_251
  }
`);

type FragmentResult2772 = ResultOf<typeof FRAGMENT_2772>;
type FragmentSelf2772 = NonNullable<FragmentResult2772>;

export type FragmentToken2772 =
  | FragmentSelf2772["__typename"]
  | FragmentSelf2772["typenameHint"] | FragmentToken2770 | FragmentToken2771;
