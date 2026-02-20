import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken991 } from "./fragment991";
import type { FragmentToken992 } from "./fragment992";

export const FRAGMENT_993 = gql(`
  fragment Fragment993 on Member152 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_152
    memberCount_152
    memberMetric_152
  }
`);

type FragmentResult993 = ResultOf<typeof FRAGMENT_993>;
type FragmentSelf993 = NonNullable<FragmentResult993>;

export type FragmentToken993 =
  | FragmentSelf993["__typename"]
  | FragmentSelf993["typenameHint"] | FragmentToken991 | FragmentToken992;
