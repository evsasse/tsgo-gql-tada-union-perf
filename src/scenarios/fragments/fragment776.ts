import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken774 } from "./fragment774";
import type { FragmentToken775 } from "./fragment775";

export const FRAGMENT_776 = gql(`
  fragment Fragment776 on Member215 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_215
    memberCount_215
    memberMetric_215
  }
`);

type FragmentResult776 = ResultOf<typeof FRAGMENT_776>;
type FragmentSelf776 = NonNullable<FragmentResult776>;

export type FragmentToken776 =
  | FragmentSelf776["__typename"]
  | FragmentSelf776["typenameHint"] | FragmentToken774 | FragmentToken775;
