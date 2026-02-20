import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2753 } from "./fragment2753";
import type { FragmentToken2754 } from "./fragment2754";

export const FRAGMENT_2755 = gql(`
  fragment Fragment2755 on Member234 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_234
    memberCount_234
    memberMetric_234
  }
`);

type FragmentResult2755 = ResultOf<typeof FRAGMENT_2755>;
type FragmentSelf2755 = NonNullable<FragmentResult2755>;

export type FragmentToken2755 =
  | FragmentSelf2755["__typename"]
  | FragmentSelf2755["typenameHint"] | FragmentToken2753 | FragmentToken2754;
