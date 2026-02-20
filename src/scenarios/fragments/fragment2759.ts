import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2757 } from "./fragment2757";
import type { FragmentToken2758 } from "./fragment2758";

export const FRAGMENT_2759 = gql(`
  fragment Fragment2759 on Member238 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_238
    memberCount_238
    memberMetric_238
  }
`);

type FragmentResult2759 = ResultOf<typeof FRAGMENT_2759>;
type FragmentSelf2759 = NonNullable<FragmentResult2759>;

export type FragmentToken2759 =
  | FragmentSelf2759["__typename"]
  | FragmentSelf2759["typenameHint"] | FragmentToken2757 | FragmentToken2758;
