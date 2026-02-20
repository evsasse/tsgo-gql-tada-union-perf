import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4774 } from "./fragment4774";
import type { FragmentToken4775 } from "./fragment4775";

export const FRAGMENT_4776 = gql(`
  fragment Fragment4776 on Member15 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_15
    memberCount_15
    memberMetric_15
  }
`);

type FragmentResult4776 = ResultOf<typeof FRAGMENT_4776>;
type FragmentSelf4776 = NonNullable<FragmentResult4776>;

export type FragmentToken4776 =
  | FragmentSelf4776["__typename"]
  | FragmentSelf4776["typenameHint"] | FragmentToken4774 | FragmentToken4775;
