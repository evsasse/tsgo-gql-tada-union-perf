import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4993 } from "./fragment4993";
import type { FragmentToken4994 } from "./fragment4994";

export const FRAGMENT_4995 = gql(`
  fragment Fragment4995 on Member234 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_234
    memberCount_234
    memberMetric_234
  }
`);

type FragmentResult4995 = ResultOf<typeof FRAGMENT_4995>;
type FragmentSelf4995 = NonNullable<FragmentResult4995>;

export type FragmentToken4995 =
  | FragmentSelf4995["__typename"]
  | FragmentSelf4995["typenameHint"] | FragmentToken4993 | FragmentToken4994;
