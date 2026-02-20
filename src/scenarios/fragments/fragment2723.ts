import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2721 } from "./fragment2721";
import type { FragmentToken2722 } from "./fragment2722";

export const FRAGMENT_2723 = gql(`
  fragment Fragment2723 on Member202 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_202
    memberCount_202
    memberMetric_202
  }
`);

type FragmentResult2723 = ResultOf<typeof FRAGMENT_2723>;
type FragmentSelf2723 = NonNullable<FragmentResult2723>;

export type FragmentToken2723 =
  | FragmentSelf2723["__typename"]
  | FragmentSelf2723["typenameHint"] | FragmentToken2721 | FragmentToken2722;
