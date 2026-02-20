import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3774 } from "./fragment3774";
import type { FragmentToken3775 } from "./fragment3775";

export const FRAGMENT_3776 = gql(`
  fragment Fragment3776 on Member135 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_135
    memberCount_135
    memberMetric_135
  }
`);

type FragmentResult3776 = ResultOf<typeof FRAGMENT_3776>;
type FragmentSelf3776 = NonNullable<FragmentResult3776>;

export type FragmentToken3776 =
  | FragmentSelf3776["__typename"]
  | FragmentSelf3776["typenameHint"] | FragmentToken3774 | FragmentToken3775;
