import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2758 } from "./fragment2758";
import type { FragmentToken2759 } from "./fragment2759";

export const FRAGMENT_2760 = gql(`
  fragment Fragment2760 on Member239 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_239
    memberCount_239
    memberMetric_239
  }
`);

type FragmentResult2760 = ResultOf<typeof FRAGMENT_2760>;
type FragmentSelf2760 = NonNullable<FragmentResult2760>;

export type FragmentToken2760 =
  | FragmentSelf2760["__typename"]
  | FragmentSelf2760["typenameHint"] | FragmentToken2758 | FragmentToken2759;
