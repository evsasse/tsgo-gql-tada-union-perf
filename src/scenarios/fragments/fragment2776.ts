import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2774 } from "./fragment2774";
import type { FragmentToken2775 } from "./fragment2775";

export const FRAGMENT_2776 = gql(`
  fragment Fragment2776 on Member255 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_255
    memberCount_255
    memberMetric_255
  }
`);

type FragmentResult2776 = ResultOf<typeof FRAGMENT_2776>;
type FragmentSelf2776 = NonNullable<FragmentResult2776>;

export type FragmentToken2776 =
  | FragmentSelf2776["__typename"]
  | FragmentSelf2776["typenameHint"] | FragmentToken2774 | FragmentToken2775;
