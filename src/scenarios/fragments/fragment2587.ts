import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2585 } from "./fragment2585";
import type { FragmentToken2586 } from "./fragment2586";

export const FRAGMENT_2587 = gql(`
  fragment Fragment2587 on Member66 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_66
    memberCount_66
    memberMetric_66
  }
`);

type FragmentResult2587 = ResultOf<typeof FRAGMENT_2587>;
type FragmentSelf2587 = NonNullable<FragmentResult2587>;

export type FragmentToken2587 =
  | FragmentSelf2587["__typename"]
  | FragmentSelf2587["typenameHint"] | FragmentToken2585 | FragmentToken2586;
