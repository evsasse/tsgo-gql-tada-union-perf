import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2993 } from "./fragment2993";
import type { FragmentToken2994 } from "./fragment2994";

export const FRAGMENT_2995 = gql(`
  fragment Fragment2995 on Member194 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_194
    memberCount_194
    memberMetric_194
  }
`);

type FragmentResult2995 = ResultOf<typeof FRAGMENT_2995>;
type FragmentSelf2995 = NonNullable<FragmentResult2995>;

export type FragmentToken2995 =
  | FragmentSelf2995["__typename"]
  | FragmentSelf2995["typenameHint"] | FragmentToken2993 | FragmentToken2994;
