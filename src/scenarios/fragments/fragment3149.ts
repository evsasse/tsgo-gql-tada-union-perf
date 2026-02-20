import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3147 } from "./fragment3147";
import type { FragmentToken3148 } from "./fragment3148";

export const FRAGMENT_3149 = gql(`
  fragment Fragment3149 on Member68 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_68
    memberCount_68
    memberMetric_68
  }
`);

type FragmentResult3149 = ResultOf<typeof FRAGMENT_3149>;
type FragmentSelf3149 = NonNullable<FragmentResult3149>;

export type FragmentToken3149 =
  | FragmentSelf3149["__typename"]
  | FragmentSelf3149["typenameHint"] | FragmentToken3147 | FragmentToken3148;
