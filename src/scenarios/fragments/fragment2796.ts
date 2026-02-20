import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2794 } from "./fragment2794";
import type { FragmentToken2795 } from "./fragment2795";

export const FRAGMENT_2796 = gql(`
  fragment Fragment2796 on Member275 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_275
    memberCount_275
    memberMetric_275
  }
`);

type FragmentResult2796 = ResultOf<typeof FRAGMENT_2796>;
type FragmentSelf2796 = NonNullable<FragmentResult2796>;

export type FragmentToken2796 =
  | FragmentSelf2796["__typename"]
  | FragmentSelf2796["typenameHint"] | FragmentToken2794 | FragmentToken2795;
