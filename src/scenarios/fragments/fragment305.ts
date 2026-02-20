import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken303 } from "./fragment303";
import type { FragmentToken304 } from "./fragment304";

export const FRAGMENT_305 = gql(`
  fragment Fragment305 on Member24 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_24
    memberCount_24
    memberMetric_24
  }
`);

type FragmentResult305 = ResultOf<typeof FRAGMENT_305>;
type FragmentSelf305 = NonNullable<FragmentResult305>;

export type FragmentToken305 =
  | FragmentSelf305["__typename"]
  | FragmentSelf305["typenameHint"] | FragmentToken303 | FragmentToken304;
