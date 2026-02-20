import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2685 } from "./fragment2685";
import type { FragmentToken2686 } from "./fragment2686";

export const FRAGMENT_2687 = gql(`
  fragment Fragment2687 on Member166 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_166
    memberCount_166
    memberMetric_166
  }
`);

type FragmentResult2687 = ResultOf<typeof FRAGMENT_2687>;
type FragmentSelf2687 = NonNullable<FragmentResult2687>;

export type FragmentToken2687 =
  | FragmentSelf2687["__typename"]
  | FragmentSelf2687["typenameHint"] | FragmentToken2685 | FragmentToken2686;
