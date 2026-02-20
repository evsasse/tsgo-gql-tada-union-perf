import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2885 } from "./fragment2885";
import type { FragmentToken2886 } from "./fragment2886";

export const FRAGMENT_2887 = gql(`
  fragment Fragment2887 on Member86 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_86
    memberCount_86
    memberMetric_86
  }
`);

type FragmentResult2887 = ResultOf<typeof FRAGMENT_2887>;
type FragmentSelf2887 = NonNullable<FragmentResult2887>;

export type FragmentToken2887 =
  | FragmentSelf2887["__typename"]
  | FragmentSelf2887["typenameHint"] | FragmentToken2885 | FragmentToken2886;
