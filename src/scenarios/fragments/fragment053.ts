import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken051 } from "./fragment051";
import type { FragmentToken052 } from "./fragment052";

export const FRAGMENT_053 = gql(`
  fragment Fragment053 on Member52 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_52
    memberCount_52
    memberMetric_52
  }
`);

type FragmentResult053 = ResultOf<typeof FRAGMENT_053>;
type FragmentSelf053 = NonNullable<FragmentResult053>;

export type FragmentToken053 =
  | FragmentSelf053["__typename"]
  | FragmentSelf053["typenameHint"] | FragmentToken051 | FragmentToken052;
