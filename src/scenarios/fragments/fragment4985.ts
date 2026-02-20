import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4983 } from "./fragment4983";
import type { FragmentToken4984 } from "./fragment4984";

export const FRAGMENT_4985 = gql(`
  fragment Fragment4985 on Member224 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_224
    memberCount_224
    memberMetric_224
  }
`);

type FragmentResult4985 = ResultOf<typeof FRAGMENT_4985>;
type FragmentSelf4985 = NonNullable<FragmentResult4985>;

export type FragmentToken4985 =
  | FragmentSelf4985["__typename"]
  | FragmentSelf4985["typenameHint"] | FragmentToken4983 | FragmentToken4984;
